import React from 'react';
import InvoiceCard from './InvoiceCard';

const InvoicesList: React.FC<any> = ({ invoices }) => {
  // console.log({ invoices });

  return (
    <div className="">
      {/* {invoices.map((invoice: any) => ( */}
      <InvoiceCard key={invoices.id} invoice={invoices} />
    </div>
  );
};

export default InvoicesList;
