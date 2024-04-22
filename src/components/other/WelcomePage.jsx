import React from 'react'
import icon from "../../assets/icons/chatIcon.svg";
import { themeBg } from '../../constant';
import { useChatContext } from '../../context-reducer/ChatContext';
export default function WelcomePage() {
  const { themeIndex } = useChatContext();

    const styles = {
        container: {
          backgroundImage: `url(${themeBg[themeIndex.value]})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          overflow: "hidden",
        },
      };

  return (
    <section className=' hidden sm:block lg:w-[80%] sm:w-[65%]  h-screen' style={styles.container}>
      <div className='center w-full h-full'>
      
        </div>  
       
    </section >
  )
}
