import React from "react";

const ListItems = (props) => {
  const { item } = props;


  const detailsHandler = (e) => {
    e.preventDefault();
    console.log(item);
  }

  return (
    <div onClick={(e) => detailsHandler(e)} className="group grid grid-cols-5 gap-4 px-6 py-4 items-center cursor-pointer bg-white border-b border-slate-100 hover:bg-slate-50 transition-all duration-200 animate-fade-in">
      <div className="flex flex-col">
        <span className="text-sm font-semibold text-text-main group-hover:text-primary transition-colors">
          {item[0]}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs font-medium text-text-muted bg-slate-100 px-2 py-1 rounded-md">
          {item[1]}
        </span>
      </div>

      <div>
        <span className="text-xs font-mono text-text-muted">{item[2]}</span>
      </div>

      <div>
        <span className="text-xs text-text-muted">{item[3]}</span>
      </div>

      <div>
        <span className="text-sm font-bold text-primary bg-primary-light px-3 py-1 rounded-full">
          {item[4]}
        </span>
      </div>
    </div>
  );
};

export default ListItems;
