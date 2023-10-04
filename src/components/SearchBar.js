import { useState } from "react";
const SearchImage_func = ({UserSeach}) => {
  const [Value, setValue] = useState('');

  const OnChangeHandler = e => {
    setValue(e.target.value)
  }
  const onSubmitHandler = e =>{
    e.preventDefault();
    UserSeach(Value);
  }
  return (
    <div className="p-5">
    <form onSubmit={onSubmitHandler}>
      <div className="flex justify-center items-center">
    <h1 className="w-fit h-fit text-2xl ">Search:</h1>
    <input type="text" Value={Value} onChange={OnChangeHandler} className="w-2/12 font-monowhitespace- h-[2.5rem] border-2 border-black indent-3  ease-out duration-500 hover:w-5/12"/>
    </div>
    </form>
    </div>
  );
}


export default SearchImage_func;