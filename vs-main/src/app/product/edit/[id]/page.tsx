'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { useQuery } from 'react-query';
import { GetUserAssetQueryQuery, UserAsset } from 'services/types/generated';
import { getUserAssetForProductPage } from 'services/userasset.service';
import Loading from 'src/common/Loading';
import EditProduct from 'src/product/EditProduct';

export default function EditProductPage() {
  const params = useParams();
  const productId = params?.id;

  const { isLoading, data: asset } = useQuery<
    GetUserAssetQueryQuery,
    unknown,
    UserAsset
  >([`product-detail-${productId}`, productId], getUserAssetForProductPage, {
    select: (asset) => asset.userasset as UserAsset,
  });

  if (isLoading) {
    return <Loading fullScreen isLoading alt="" />;
  }

  return <EditProduct product={asset} />;
}
