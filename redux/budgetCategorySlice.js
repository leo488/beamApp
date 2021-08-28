import React from "react";
import { Image } from "react-native";
import { createSlice } from "@reduxjs/toolkit";

const budgetCategorySlice = createSlice({
  name: "budgetCategory",
  initialState: {
    budgetCat: [
      {
        title: "Add New",
        image:
          "https://compai.pub/v1/png/aa250c0c4c072de0e2331749690c24f494b7ffa3500998f81815db1dee8796d9",
        id: 1,
        ref: "add",
      },
      {
        title: "Food",
        image:
          "https://compai.pub/v1/png/3db946b1f4429d046f794421b6bd622b73deb401d34bbe5deb2c8e6cf7f56ee4",
        id: 2,
        ref: "food",
      },
      {
        title: "Clothes",
        image:
          "https://compai.pub/v1/png/0c73c7094d0f1937c0fd63e439d6a0d2e77dedb6f1bfac1e490b1163190673dc",
        id: 3,
        ref: "cloth",
      },
      {
        title: "Accesories",
        image:
          "https://compai.pub/v1/png/2521cca9dede030519aba77394c82331bd15722dfec8ab6b1237634230878598",
        id: 4,
        ref: "accessories",
      },
      {
        title: "Hair Do",
        image:
          "https://compai.pub/v1/png/fa8c64a00ae0f0f0f34eef99ce5debd08031ada0a92693a431d33742fffe21ea",
        id: 5,
        ref: "hair",
      },
      {
        title: "School",
        image:
          "https://compai.pub/v1/png/f44ce0aa080bcbca2238a645148fe3cc41fa597a6495a8f953db49b55fa1ef05",
        id: 6,
        ref: "school",
      },
      {
        title: "Laundry",
        image:
          "https://compai.pub/v1/png/3e024190cfba33731446e39a7bda2d209f8c26d0136d81ed69141844f2773098",
        id: 7,
        ref: "laundry",
      },
      {
        title: "Shoes",
        image:
          "https://compai.pub/v1/png/6ce82fd1d5d884f86ef217ce3a0757620360db08a2b2682c09e5c41d3be478bf ",
        id: 8,
        ref: "laundry",
      },
      {
        title: "Recharge",
        image:
          "https://compai.pub/v1/png/99784bffdd2646c1a324be7dcbbe1bcd948f2decb0f6b40862f3e83a32b0faa0",
        id: 9,
        ref: "laundry",
      },
      {
        title: "Rental",
        image:
          "https://compai.pub/v1/png/e9f235d640b8ade228037f3c00decddd91fbbe409d875e7ecd243dc53a5aa2f8",
        id: 10,
        ref: "laundry",
      },
      {
        title: "Phone",
        image:
          "https://compai.pub/v1/png/667c27e0879df14d01a4b167bddbab872ae5d36c29e724f53b0b570d825b1835",
        id: 11,
        ref: "laundry",
      },
    ],
    budgetPlannerList: [],
  },

  reducers: {
    addNew: (state, action) => {
      const newCat = {
        title: action.payload.title,
        id: Math.random(),
        ref: action.paayload.name,
        image: (
          <Image
            source={require("./../assets/laundryPng.png")}
            style={{ width: 40, height: 40 }}
          />
        ),
      };
      state[0].budgetCat.push(newCat);
    },
    planBudget: (state, action) => {
      const newList = {
        title: action.payload.title,
        id: action.payload.id,
        image: action.payload.image,
      };
      state.budgetPlannerList.push(newList);
      // Object.assign(state, {newBudget})
    },
    removeFromList: (state, action) => {
      return state.budgetPlannerList.filter((x) => {
        x.id != action.payload.id;
      });
    },
  },
});

export const { addNew, planBudget, removeFromList } =
  budgetCategorySlice.actions;

export default budgetCategorySlice.reducer;
