import './styles/App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Body from './components/Body';
import Banner2 from './components/Banner2';
import Banner3 from './components/Banner3';


const bannerMaterialTwo = {
  title: 'Tied shirt',
  content: 'Roam the unknown',
  bgColor: 'grey',
  fontColor: 'Orange'
}

const bannerMaterialOne = {
  title:"Black Sweater" ,
  content:"Guess??",
  bgColor: "cyan",
  fontColor: "brown"
};
function App() {
  return (
   <>
   <Main/>
   <Body/>
   <Banner 
    title="Blue Sweater" 
    content = "I wear white shoes"
    bgColor= "pink"
    fontColor= "red"/>
   <Banner 
    title="Grey Sweater" 
    content = "I wear pink socks"
    bgColor="blue"
    fontColor="white"/>
   <Banner2
   info={bannerMaterialOne}
   />
   <Banner3
   data={bannerMaterialTwo}
/>
   <Footer/>
  
   </>
  );
}

export default App;
