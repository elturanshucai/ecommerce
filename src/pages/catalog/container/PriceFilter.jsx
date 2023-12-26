import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FaMinus } from "react-icons/fa6";

export default function PriceFilter() {
    const [value, setValue] = React.useState([200, 600]);

    function valuetext(value) {
        return `${value}`;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const changeMinInput = (e) => {
        if (e.target.value >= 0 && e.target.value <= 1000) {
            setValue([e.target.value, value[1]])
        }
    }

    const changeMaxInput = (e) => {
        if (e.target.value >= 0 && e.target.value <= 1000) {
            setValue([value[0], e.target.value])
        }
    }

    return (
        <div>
            <Box style={{ width: '80%', margin: '0 auto' }}>
                <Slider
                    getAriaLabel={() => 'Price range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={1000}
                    min={1}
                />
            </Box>
            <div className='mt-4 flex gap-3 items-center'>
                <input
                    type="number"
                    onWheel={e => e.target.blur()}
                    className='outline-none border rounded-sm py-2 px-3 w-[45%]'
                    value={value[0]}
                    onChange={changeMinInput}

                />
                <FaMinus className='w-[10%]' />
                <input
                    type="number"
                    onWheel={e => e.target.blur()}
                    className='outline-none border rounded-sm py-2 px-3 w-[45%]'
                    value={value[1]}
                    onChange={changeMaxInput}
                />
            </div>
        </div>
    );
}