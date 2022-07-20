jest.useFakeTimers();
import React from "react";
import { create } from 'react-test-renderer'
import { CreateProduct } from "../CreateProduct";
import { Provider } from "react-redux";
import store from "../../store";

const tree = create(
    <Provider store={store}>
        <CreateProduct />
    </Provider>
)

test('Add Product Button', async () => {
    const btn = await tree.root.findByProps({ testID: "submitButtonText" }).props
    await expect(btn.children).toEqual('Add Product')
});

test('Select Category', async () => {
    const txt = await tree.root.findByProps({ testID: "categoryText" }).props
    await expect(txt.children).toBeDefined()
})

