// src/helpers/dataHelper.ts
export async function getProductData() {
  const { default: productData } = await import(
    '../fixtures/data/products.json',
    {
      assert: { type: 'json' },
    }
  );
  return productData;
}

export async function getUserData() {
  const { default: userData } = await import('../fixtures/data/users.json', {
    assert: { type: 'json' },
  });
  return userData;
}

export async function getUrlData() {
  const { default: urlData } = await import('../fixtures/data/urls.json', {
    assert: { type: 'json' },
  });
  return urlData;
}
