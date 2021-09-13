import React, { useState, useEffect } from 'react'
import { SiAddthis } from "react-icons/si";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpload } from "react-icons/gr";


const CreateTask = () => {
    const [item, setItem] = useState("")
    const [allList, setAllList] = useState([])
    const [count, setCount] = useState(0)
    const [updateFlag, setUpdateFlag] = useState(false)

    const addItem = () => {
        setAllList([...allList, item])
        setItem("")
    }

    const editItem = (item) => {
        setUpdateFlag(true)
        setItem({ id: allList.length, item: item })
    }

    const updateItem = (itm) => {

        let updItem = allList.find((ele) => {
            return ele === itm
        })

        const index = allList.indexOf(itm)
        console.log(index + 1, item)



    }

    useEffect(() => {
        setItem(item)
    }, [item])




    return (

        <>
            <div class="flex justify-center m-20 h-auto">
                <div>
                    <label class="text-white mr-5">Enter Item </label>
                    <input class="pl-4 border-2 border-red-600 focus:outline-none rounded-xl" type="text" value={item.item} onChange={(e) => setItem(e.target.value)}>
                    </input>
                    {updateFlag ? <button class="text-xl ml-3 align-middle" onClick={() => updateItem(item)}><GrUpload /></button>
                        : <button class="text-xl ml-3 align-middle" onClick={() => addItem()}><SiAddthis /></button>}
                </div>


            </div>

            <div class="flex-col">

                {allList.map((ele, index) => (
                    <div class="flex justify-center mb-10">
                        <div class="flex-col">
                            <div class="flex">
                                <p key={ele.index} class="bg-yellow-300 p-2 w-52 border-2  border-red-600 rounded-md">
                                    {ele}
                                </p>
                                <button class="ml-10 bg-green-400 text-2xl items-center p-2" onClick={() => editItem(ele)}><AiOutlineEdit /></button>
                                <button class="ml-4 bg-red-600 text-2xl p-2"><RiDeleteBin6Line /></button>
                            </div>
                        </div>
                    </div>

                ))}


            </div>
        </>

    )
}

export default CreateTask
