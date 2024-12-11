import React from 'react'

const page = () => {
  return (
    <div>
    <section id="our-team" className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://i.pinimg.com/736x/99/69/08/9969082a3dcc639a7749149b35c96894.jpg" alt="Team Member 1" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                    <p className="text-gray-700">Time: 9: 00PM</p>
                </div>
    
             
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://i.pinimg.com/736x/73/57/70/735770f640791e2f5b4fbbb3077dd510.jpg" alt="Team Member 2" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                    <p className="text-gray-700">Time: 11: 00PM</p>
                </div>
    
             
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://down-ph.img.susercontent.com/file/sg-11134201-22100-k5ynl6m21riv0d" alt="Team Member 3" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                    <p className="text-gray-700">Time: 1: 00PM</p>
                </div>
    
               
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFaFFgp-NCKalnFNNM7ev9lpkGE_UdD4V_YKEz2oxa0XUsPMp7XhaQVkvoWpyDyz__stM&usqp=CAU" alt="Team Member 4" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Peter Johnson</h3>
                    <p className="text-gray-700">Time: 3: 00PM</p>
                </div>
    
              
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://i.ebayimg.com/images/g/Js0AAOSwThtbVdip/s-l1200.jpg" alt="Team Member 5" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Emily Brown</h3>
                    <p className="text-gray-700">Time: 5: 00PM</p>
                </div>
    
              
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://i.ebayimg.com/images/g/wGUAAOSwKdZbYvcL/s-l1200.jpg" alt="Team Member 6" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Michael Davis</h3>
                    <p className="text-gray-700">Time: 7: 00PM</p>
                </div>
    
              
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://down-sg.img.susercontent.com/file/my-11134201-23030-ua9j531oxsov5c" alt="Team Member 7" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
                    <p className="text-gray-700">Time: 8: 00PM</p>
                </div>
    
             
                <div className="bg-white rounded-lg shadow-md p-6 my-6 text-center">
                    <img src="https://ae01.alicdn.com/kf/S7748b803cb0f42119f017f3541bc04ceq.jpg_960x960.jpg" alt="Team Member 8" className="w-full rounded-full mb-4"/>
                    <h3 className="text-xl font-semibold mb-2">David Wilson</h3>
                    <p className="text-gray-700">Time: 10: 00PM</p>
                </div>
            </div>
        </div>
    </section></div>
  )
}

export default page