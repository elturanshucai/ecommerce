import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { IoClose } from "react-icons/io5";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit',
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 1,
};

export default function SizeChart({ setOpen, open }) {
    const [activeButton, setActiveButton] = React.useState('women')
    const [selectedSize, setSelectedSize] = React.useState('cm')
    const handleClose = () => setOpen(false);

    const changeSelectedSize = (e) => {
        setSelectedSize(e.target.id)
    }

    const handleClickButton = (e) => {
        setActiveButton(e.target.id)
    }
    const womenData = [
        {
            title: 'Europe',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'USA',
            sizeArray: ['5', '6', '6.5', '7.5', '8', '9', '10', '11']
        },
        {
            title: 'United Kingdom',
            sizeArray: ['2', '3', '4', '5', '6', '7', '8', '9']
        },
        {
            title: 'China',
            sizeArray: ['230/83', '235/84', '240/85', '245/86', '255/87', '260/88', '265/89', '275/90',]
        },
        {
            title: 'Russia',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'Italy',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'South Korea',
            sizeArray: ['230', '235', '240', '245', '255', '260', '265', '275']
        }
    ]
    const menData = [
        {
            title: 'Europe',
            sizeArray: ['38', '39', '40', '41', '42', '43', '44', '45']
        },
        {
            title: 'USA',
            sizeArray: ['5', '6', '6.5', '7.5', '8', '9', '10', '11']
        },
        {
            title: 'United Kingdom',
            sizeArray: ['2', '3', '4', '5', '6', '7', '8', '9']
        },
        {
            title: 'China',
            sizeArray: ['230/83', '235/84', '240/85', '245/86', '255/87', '260/88', '265/89', '275/90',]
        },
        {
            title: 'Russia',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'Italy',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'South Korea',
            sizeArray: ['230', '235', '240', '245', '255', '260', '265', '275']
        }
    ]
    const kidsData = [
        {
            title: 'Europe',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'USA',
            sizeArray: ['5', '6', '6.5', '7.5', '8', '9', '10', '11']
        },
        {
            title: 'United Kingdom',
            sizeArray: ['2', '3', '4', '5', '6', '7', '8', '9']
        },
        {
            title: 'China',
            sizeArray: ['230/83', '235/84', '240/85', '245/86', '255/87', '260/88', '265/89', '275/90',]
        },
        {
            title: 'Russia',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'Italy',
            sizeArray: ['35', '36', '37', '38', '39', '40', '41', '42']
        },
        {
            title: 'South Korea',
            sizeArray: ['230', '235', '240', '245', '255', '260', '265', '275']
        }
    ]

    const cmData = [
        { title: 'Foot length', cmList: ['22.4', '23', '23.6', '24.3', '24.9', '25.5', '26.2', '26.8'] }
    ]

    const inchData = [
        { title: 'Foot length', cmList: ['22.6', '23.8', '25', '24.3', '24.9', '25.5', '26.2', '30'] }
    ]

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='relative p-12 h-[500px] overflow-y-auto'>
                    <IoClose className='absolute top-6 right-6 cursor-pointer text-3xl text-gray-500' onClick={handleClose} />
                    <h1 className='text-xl font-bold text-center mb-8'>Size chart</h1>
                    <div className='flex gap-3 items-center w-fit mx-auto font-bold mb-6'>
                        <button
                            onClick={handleClickButton}
                            id='women'
                            className={`px-5 py-2 rounded-md transition-all ${activeButton === 'women' && 'text-primary border-primary border'}`}
                        >
                            Women
                        </button>
                        <button
                            id='men'
                            onClick={handleClickButton}
                            className={`px-5 py-2 rounded-md transition-all ${activeButton === 'men' && 'text-primary border-primary border'}`}
                        >
                            Men
                        </button>
                        <button
                            id='kids'
                            onClick={handleClickButton}
                            className={`px-5 py-2 rounded-md transition-all ${activeButton === 'kids' && 'text-primary border-primary border'}`}
                        >
                            Kids
                        </button>
                    </div>
                    <div className='rounded-sm border mb-14'>
                        <h1 className='text-lg font-bold text-center py-4'>Footwear</h1>
                        <table>
                            {activeButton === 'women' && womenData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    <td className='px-4 py-2 text-start min-w-[160px]'>{item.title}</td>
                                    {item.sizeArray.map((size, sizeIndex) => (
                                        <td key={sizeIndex} className='py-2 px-4'>{size}</td>
                                    ))}
                                </tr>
                            ))}
                            {activeButton === 'men' && menData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    <td className='px-4 py-2 text-start min-w-[160px]'>{item.title}</td>
                                    {item.sizeArray.map((size, sizeIndex) => (
                                        <td key={sizeIndex} className='py-2 px-4'>{size}</td>
                                    ))}
                                </tr>
                            ))}
                            {activeButton === 'kids' && kidsData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`${index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    <td className='px-4 py-2 text-start min-w-[160px]'>{item.title}</td>
                                    {item.sizeArray.map((size, sizeIndex) => (
                                        <td key={sizeIndex} className='py-2 px-4'>{size}</td>
                                    ))}
                                </tr>
                            ))}
                        </table>
                    </div>
                    <div className='w-fit mx-auto flex items-center justify-center gap-5 mb-5'>
                        <p className='font-bold'>I want to see size equivalence in: </p>
                        <button
                            onClick={changeSelectedSize}
                            id='cm'
                            className={`${selectedSize === 'cm' ? 'border border-primary text-primary' : 'text-gray-400'} rounded-md font-bold px-5 py-3`}
                        >
                            cm
                        </button>
                        <button
                            onClick={changeSelectedSize}
                            id='inch'
                            className={`${selectedSize === 'inch' ? 'border border-primary text-primary' : 'text-gray-400'} rounded-md font-bold px-5 py-3`}
                        >
                            inches
                        </button>
                    </div>
                    <div className='border rounded-sm'>
                        <p className='py-4 w-fit mx-auto text-lg font-bold'>Equivalence in centimetres</p>
                        <table className='w-full'>
                            {selectedSize === 'cm' && cmData.map((item, index) => (
                                <tr className='bg-gray-200' key={index}>
                                    <td className='w-[120px] text-start px-4 py-3'>{item.title}</td>
                                    {item.cmList.map((size, i) => (
                                        <td className='text-start pr-4' key={i}>{size}cm</td>
                                    ))}
                                </tr>
                            ))}
                            {selectedSize === 'inch' && inchData.map((item, index) => (
                                <tr className='bg-gray-200' key={index}>
                                    <td className='w-[120px] text-start px-4 py-3'>{item.title}</td>
                                    {item.cmList.map((size, i) => (
                                        <td className='text-start pr-4' key={i}>{size}inch</td>
                                    ))}
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </Box>
        </Modal>
    );
}
