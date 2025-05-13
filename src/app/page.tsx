import PushTextUp from "./components/PushTextUp";
import PushLettersUp from "./components/PushLettersUp";
import UnderlineAcross from "./components/UnderlineAcross";
import PushTextUpMulti from "./components/PushTextUpMulti";
import PushLettersUpMulti from "./components/PushLettersUpMulti";
import PushLettersSideMulti from "./components/PushLettersSideMulti";
import UnderlineAcrossNoGlitch from "./components/UnderlineAcrossNoGlitch";
import UnderlineMidOut from "./components/UnderlineMidOut";

export default function Page() {
  return (
    <>
      <div className="p-12 font-bold text-6xl">
        <PushTextUp 
        text="Push Text Up" 
        hoverText="Hover Push Text Up" 
        hoverClasses="text-blue-600"
        duration={0.3}
        ></PushTextUp>
      </div>
      <div className="p-12 font-bold text-6xl">
        <PushLettersUp 
        text="Push Letters Up" 
        hoverText="Hover Push Letters Up" 
        hoverClasses="text-red-600"
        duration={0.3}
        stagger={0.05}
        ></PushLettersUp>
      </div>
      <div className="p-12 font-bold text-6xl">
        <UnderlineAcross 
        text="Underline Across" 
        color="red"
        thickness={6}
        ></UnderlineAcross>
      </div>
      <div className="p-12 font-bold text-6xl">
        <UnderlineMidOut 
        text="Underline Middle Out" 
        color="black"
        thickness={6}
        ></UnderlineMidOut>
      </div>
      <div className="p-12 font-bold text-6xl">
        <UnderlineAcrossNoGlitch
        text="Underline Across No Glitch" 
        color="green"
        thickness={6}
        duration={1}
        ></UnderlineAcrossNoGlitch>
      </div>
      <div className="p-12 font-bold text-6xl">
        <PushTextUpMulti 
        text={['Push', 'Text', 'Up', 'Multi', 'Animation']}
        classes={['text-red-600', 'text-blue-600', 'text-green-600', 'text-orange-600', 'text-yellow-600']}
        duration={0.5}
        timeBetween={2}
        ></PushTextUpMulti>
      </div>
      <div className="p-12 font-bold text-6xl">
        <PushLettersUpMulti
        text={['Push', 'Letters', 'Up', 'Multi', 'Animation']}
        classes={['text-red-600', 'text-blue-600', 'text-green-600', 'text-orange-600', 'text-yellow-600']}
        duration={0.3}
        stagger={0.05}
        timeBetween={1}
        ></PushLettersUpMulti>
      </div>
      <div className="p-12 font-bold text-6xl">
        <PushLettersSideMulti
        text={['Push', 'Letters', 'Side', 'Multi', 'Animation']}
        classes={['text-red-600', 'text-blue-600', 'text-green-600', 'text-orange-600', 'text-yellow-600']}
        duration={1.5}
        stagger={0.25}
        timeBetween={6}
        letterWidth={100}
        ></PushLettersSideMulti>
      </div>
    </>
  );
}
