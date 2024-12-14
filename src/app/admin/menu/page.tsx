"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { collection } from "firebase/firestore";
import React, { ChangeEvent, useEffect, useState } from "react";
import { db, store } from "../../../../firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { MenuItem as MenuItemProp, categories } from "@/app/menu/data";
import MenuItem from "@/app/menu/components/MenuItem";
import {
  FormControl,
  InputLabel,
  Modal,
  Select,
  TextField,
  MenuItem as SelectItem,
  SelectChangeEvent,
  Input,
} from "@mui/material";
import { addMenuItem, updateItem } from "../../../../api/database";
import { AddAPhotoOutlined, AddRounded } from "@mui/icons-material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { createImageName } from "../../../../api/helperFunctions";

const Menu = () => {
  const menuRef = collection(db, "menu");
  const [menu, loading] = useCollectionData(menuRef);

  const activeItem = () => {
    if (activeId.length < 5) return null;
    if (menu) return menu.find((item) => item.id === activeId);
  };

  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState("");
  const [open, setOpen] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [changed, setChanged] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("0");
  const [image, setImage] = useState("");

  const filterCategory = (category: string, item: MenuItemProp) => {
    return category.toLowerCase() === item.category.toLowerCase();
  };

  const itemChecker = (item: MenuItemProp) => {
    if (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.desc.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    )
      return item;
  };

  const search = () => {
    if (menu === undefined) return [];
    return menu.filter((item: any) => itemChecker(item));
  };

  const handleSetCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  async function updateImage() {
    if (image.length > 0) {
      const fileRef = ref(
        store,
        `menuitems/${createImageName(activeItem()?.name as string)}`
      );

      const response = await fetch(image);
      const blob = await response.blob();

      uploadBytesResumable(fileRef, blob)
        .then((snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          getDownloadURL(snapshot.ref).then((url) => {
            updateItem(activeId, { image: url });
            setImage("");
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const selectItem = (id: string) => {
    setActiveId(id);
    setOpen(true);
  };

  const createMenuItem = () => {
    // const item = activeItem();
    // if (!item) return;

    if (
      name.length < 1 ||
      title.length < 1 ||
      desc.length < 1 ||
      price.length < 1 ||
      category.length < 1
    ) {
      setChanged(true);
      setError("Please fill all fields.");
      return;
    }

    addMenuItem(name, title, desc, price, categories[+category], image);
    setOpenCreate(false);
  };

  const submitChanges = () => {
    const item = activeItem();
    if (!item) return;

    if (name.length > 0) {
      updateItem(activeId, { name });
      setName("");
      setChanged(true);
      setError("Please input a name.");
    }

    if (title.length > 0) {
      updateItem(activeId, { title });
      setTitle("");
      setChanged(true);
      setError("Please input a title.");
    }

    if (desc.length > 0) {
      updateItem(activeId, { desc });
      setDesc("");
      setChanged(true);
      setError("Please input a description.");
    }

    if (price.length > 0) {
      updateItem(activeId, { price });
      setPrice("");
      setChanged(true);
      setError("Please input a price.");
    }

    if (category.length > 0) {
      updateItem(activeId, { category });

      setCategory("");
      setChanged(true);
      setError("Please input a category.");
    }

    // To update image
    updateImage();

    setOpen(false);
  };

  useEffect(() => {
    setName("");
    setTitle("");
    setDesc("");
    setPrice("");
    setCategory("");
  }, [open]);

  return (
    <main className="h-[100vh]">
      <Header />
      <section className="p-8 max-sm:p-0">
        <input
          className="h-[3rem] w-[30%] max-sm:w-[80vw] bg-transparent border border-[rgb(34,20,0)] mt-8 ml-[4rem] p-4 max-sm:ml-8 outline-[rgb(34,20,0)] text-[rgb(34,20,0)] placeholder-[rgba(34,20,0,0.69)] caret-[rgb(34,20,0)]"
          placeholder="Find an item"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <section
          className="flex mt-12 ml-16 max-sm:ml-8 cursor-pointer"
          onClick={() => setOpenCreate(true)}
        >
          <AddRounded />
          <b>Add a menu item</b>
        </section>

        {!loading && menu && menu.length > 0 && (
          <>
            {query.length > 0 && (
              <section className="p-16 max-sm:p-4">
                <p className="bg-[rgb(233,186,0)] w-fit mb-[1rem] p-3 pr-[3rem] text-[1.5rem]">
                  <b>
                    Result{search().length > 1 && "s"} for "{query}"
                  </b>
                </p>
                <div className="flex flex-wrap gap-10">
                  {search().map((item: any) => (
                    <MenuItem data={item} admin open={selectItem} />
                  ))}
                </div>
              </section>
            )}

            {categories.map((category: string) => {
              return (
                <section className="p-[4rem] max-sm:p-8">
                  <p className="bg-[rgb(233,186,0)] w-fit mb-[1rem] p-3 pr-[3rem] text-[1.5rem]">
                    <b>{category.toUpperCase()}</b>
                  </p>
                  <div className="flex flex-wrap gap-10">
                    {menu
                      .filter((item: any) => filterCategory(category, item))
                      .map((item: any) => (
                        <MenuItem data={item} admin open={selectItem} />
                      ))}
                  </div>
                </section>
              );
            })}
          </>
        )}

        {activeItem() !== null && (
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            className="flex flex-col justify-center items-center"
          >
            <main className="bg-[rgb(233,186,0)] h-[95%] w-[30%] max-sm:w-[80%] flex flex-col gap-4 overflow-y-auto p-8">
              <p className="mb-4">
                <b className="text-[1.1rem]">{activeItem()?.name}</b>
              </p>

              <TextField
                className="mb-4"
                required
                id="outlined-required"
                label="Name"
                defaultValue={activeItem()?.name}
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                className="mb-4"
                id="outlined-required"
                label="Title"
                defaultValue={activeItem()?.title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <TextField
                className="mb-4"
                id="outlined-required"
                label="Description"
                defaultValue={activeItem()?.desc}
                onChange={(e) => setDesc(e.target.value)}
              />

              <TextField
                className="mb-4"
                id="outlined-required"
                label="Price"
                defaultValue={activeItem()?.price}
                onChange={(e) => setPrice(e.target.value)}
              />

              <FormControl fullWidth className="mb-4">
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Party Size"
                  onChange={handleSetCategory}
                >
                  {categories.map((category, i) => (
                    <SelectItem value={i}>{category}</SelectItem>
                  ))}
                </Select>
              </FormControl>

              <div className="flex flex-col items-center">
                <label
                  htmlFor="file-input"
                  className="flex justify-between cursor-pointer border-[0.5px] border-[rgba(30,24,0,0.27)] w-full bg-transparent px-4 py-4 rounded mb-2"
                >
                  <span>
                    {image ? "Change Selected Image" : "Pick an Image"}
                  </span>

                  <AddAPhotoOutlined />
                </label>
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              {error && <div className="text-[0.8rem] text-[red]">{error}</div>}

              <button
                className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-2 rounded-md h-[3rem] w-full mx-1 py-4 flex justify-center items-center"
                onClick={submitChanges}
              >
                <b>Submit</b>
              </button>
            </main>
          </Modal>
        )}

        <Modal
          open={openCreate}
          onClose={() => setOpenCreate(false)}
          className="flex flex-col justify-center items-center"
        >
          <main className="bg-[rgb(233,186,0)] h-[95%] w-[30%] max-sm:w-[80%] flex flex-col gap-4 overflow-y-auto p-8">
            <p className="mb-4">
              <b className="text-[1.1rem]">Add new item to the menu</b>
            </p>

            <TextField
              className="mb-4"
              required
              id="outlined-required"
              label="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <TextField
              className="mb-4"
              id="outlined-required"
              label="Title"
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              className="mb-4"
              id="outlined-required"
              label="Description"
              onChange={(e) => setDesc(e.target.value)}
            />

            <TextField
              className="mb-4"
              id="outlined-required"
              label="Price"
              onChange={(e) => setPrice(e.target.value)}
            />

            <FormControl fullWidth className="mb-4">
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Party Size"
                onChange={handleSetCategory}
              >
                {categories.map((category, i) => (
                  <SelectItem value={i}>{category}</SelectItem>
                ))}
              </Select>
            </FormControl>

            {error && <div className="text-[0.8rem] text-[red]">{error}</div>}

            <button
              className="bg-[rgb(30,24,0)] text-[rgb(233,186,0)] m-5 rounded-md h-[3rem] w-full mx-1"
              onClick={createMenuItem}
            >
              <b>Submit</b>
            </button>
          </main>
        </Modal>
      </section>
      <Footer />
    </main>
  );
};

export default Menu;
