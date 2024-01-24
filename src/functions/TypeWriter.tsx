import { Typewriter } from 'react-simple-typewriter'

type TypeWriterProps = {
    array: string[];
};

const TypeWriter = (props:TypeWriterProps) => {
    return ( <Typewriter
        words={props.array}
        loop={Infinity}
        cursor
        cursorStyle="_"
        typeSpeed={90}
        deleteSpeed={50}
        delaySpeed={1000}
        cursorColor='#000000'
      /> );
}
 
export default TypeWriter;