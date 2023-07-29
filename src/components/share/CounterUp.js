import React , {useState , useRef , useEffect} from 'react';

const CounterUp = ({start = 0 ,end , time}) => {
    const [state , setState] = useState(null);

    const ref = useRef(start);

    const counter = end / 200 ;

    const CountUp = () => {
        if(ref.current < end){
            const result=Math.ceil(ref.current + counter);
            if (result > end) setState(end);
            setState(result);
            ref.current = result ;
        }
        setTimeout(CountUp,time);
    }


    useEffect( () => {
        let isMounted = true;
        if(isMounted){
            CountUp();
        }
        return () => isMounted=false;

    }, [end])

    return (
        <div>
            <div>{state}</div>
        </div>
    );
};

export default CounterUp;