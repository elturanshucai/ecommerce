import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineFileUpload } from "react-icons/md";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

export default function LeaveReview({ open, setOpen, messageTo }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        rating: null,
        file: null,
        review: ''
    })
    const handleClose = () => setOpen(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form className='p-12 w-[400px] relative flex flex-col gap-5 h-[500px] overflow-y-auto'>
                        <IoCloseOutline className='text-gray-500 text-xl top-6 right-6 cursor-pointer absolute' onClick={handleClose} />
                        <h1 className='text-2xl text-center font-bold mb-6'>Leave a review</h1>
                        <div className='text-sm flex flex-col gap-2'>
                            <p>Name</p>
                            <input
                                type="text"
                                className='border outline-none rounded-sm px-4 py-2'
                                placeholder='Your name'
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                value={formData.name}
                            />
                        </div>
                        <div className='text-sm flex flex-col gap-2'>
                            <p>Email</p>
                            <input
                                type="email"
                                className='border outline-none rounded-sm px-4 py-2'
                                placeholder='Your working email'
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                value={formData.email}
                            />
                        </div>
                        <div className='text-sm flex flex-col gap-2'>
                            <p>Rating</p>
                            <select
                                className='px-4 py-2 rounded-sm border outline-none'
                                onChange={e => setFormData({ ...formData, rating: e.target.value })}
                            >
                                <option value={null}>Choose rating</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className='text-sm flex flex-col gap-2'>
                            <p>Upload a photo or video (optional)</p>
                            <div className='border-dashed border rounded-sm p-6'>
                                <MdOutlineFileUpload className='w-6 h-6 text-gray-500 mb-3 mx-auto' />
                                <p className='text-center mb-5'>Drag and drop here to upload</p>
                                <label htmlFor="file" className='block rounded-sm border border-primary py-2 px-4 text-primary w-fit mx-auto cursor-pointer'>Or select file</label>
                                <input type="file" id="file" className='hidden' />
                            </div>
                        </div>
                        <div className='text-sm flex flex-col gap-2 mb-10'>
                            <p>Review</p>
                            <textarea
                                defaultValue={messageTo}
                                className='border rounded-sm py-3 px-4 text-gray-500 outline-none min-h-[100px] max-h-[100px]'
                                cols="30" rows="10"></textarea>
                        </div>
                        <button className='bg-primary rounded-md text-white font-semibold py-3 px-8 w-full'>
                            Submit a review
                        </button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}