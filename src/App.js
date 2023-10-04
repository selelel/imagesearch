import SearchSearchImage_funcImages from './components/SearchBar';
import ImageList from './components/ImageList'
import searchImages from './api';
import { useState } from 'react';

function App () {
  const [Imgs, setImgs] = useState([]);

  const SearchBar_Arguement = async (term) => {
    const results = await searchImages(term);
    setImgs(results);
  }
  return (
    <>
      <div>
        <h1 className='text-2xl text-center text-white font-semibold py-2 bg-green-300 border-b-2 border-emerald-600 font-mono'>Website on Development</h1>
      </div>

      <div className='w-8/12 h-[35rem] mx-auto border-2 border-dashed border-black mt-5 rounded-tl-3xl rounded-tr-3xl'>
        <SearchSearchImage_funcImages UserSeach={SearchBar_Arguement} />
        <ImageList setsOfImages={Imgs}/>
      </div>
        
    </>
  );
}
export default App;