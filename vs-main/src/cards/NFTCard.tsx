import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { MdOutlineShoppingCart } from 'react-icons/md';

export default function NFTCard({ img = '/assets/images/asset.png' }) {
  return (
    <>
      <div className="relative rounded-xl bg-base-200 p-4 pt-10 dark:bg-dark-base-200">
        <span className="absolute top-4 right-4 cursor-pointer text-2xl">
          <HiDotsHorizontal />
        </span>
        <div className="flex items-center justify-center overflow-hidden">
          <img src={img} className="block object-contain" alt="" />
        </div>
        <div className="pt-4">
          <div className="space-y-1">
            <h3 className="color-heading text-xl">Lorem, ipsum dolor.</h3>
            <p className="">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.{' '}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <p className="">
              By
              <span className="ml-1 text-primary">Razer</span>
            </p>
            <button className="c-btn-primary flex items-center justify-center gap-x-2">
              <MdOutlineShoppingCart className="text-xl" />
              <span>$28.50</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
