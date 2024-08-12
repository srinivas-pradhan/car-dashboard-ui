'use client';

const  GridLayout = () => {
    return (  
        <div className="pl-[20%] flex justify-center">
            <ul className="grid grid-cols-4 ml-10 mr-10 mt-4 gap-x-10 gap-y-6">
                <li className="rounded-xl bg-teal-500 w-60 h-48">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-48">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-48">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-48">Text</li>
                <li className="col-span-2 rounded-xl bg-teal-500 w-full h-64">Text</li>
                <li className="col-span-2 rounded-xl bg-teal-500 w-full h-64">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-40">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-40">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-40">Text</li>
                <li className="rounded-xl bg-teal-500 w-60 h-40">Text</li>
            </ul>
        </div>


    );
}
 
export default GridLayout ;
