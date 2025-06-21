// import { MdOutlineGroup } from "react-icons/md";
// import Badge from "../Badge";
// import { ProjectMatrixData } from "@/constants/ProjectMatrix";


// export default function ProjectMetrics() {
//     return (
//         <div className="flex justify-between gap-4  md:gap-6">

//             {
//                 ProjectMatrixData.map((matrix) => (

//                     <div key={matrix.id} className="bg-[#F9FAFB] rounded-2xl border border-gray-200  p-5 md:p-6">
//                         <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#172536]">
//                             <MdOutlineGroup className=" size-6 text-white/90" />
//                         </div>
//                         <div className="flex items-end justify-between mt-5">
//                             <div>
//                                 <span className="text-sm ">
//                                     {matrix.name}
//                                 </span>
//                                 <h4 className="mt-2 font-bold text-title-sm ">
//                                     {matrix.count}
//                                 </h4>
//                             </div>
//                             <Badge variant={matrix.type}>
//                                 {matrix.growingRate}
//                             </Badge>
//                         </div>
//                     </div>))
//             }
//         </div>
//     );
// }



import { MdOutlineGroup, MdOutlineWork, MdOutlineCheckCircle, MdOutlinePause, MdOutlineCancel } from "react-icons/md";
import Badge from "../Badge";
import { ProjectMatrixData } from "@/constants/ProjectMatrix";

// Icon mapping based on project type
const iconMap = {
    success: <MdOutlineWork className="size-6 text-white/90" />,
    danger: <MdOutlineCheckCircle className="size-6 text-white/90" />,
    onHold: <MdOutlinePause className="size-6 text-white/90" />,
    warning: <MdOutlineCancel className="size-6 text-white/90" />,
    info: <MdOutlineCancel className="size-6 text-white/90" />,
    inactive: <MdOutlineCancel className="size-6 text-white/90" />,
    default: <MdOutlineGroup className="size-6 text-white/90" />
};

export default function ProjectMetrics() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {ProjectMatrixData.map((matrix) => (
                <div
                    key={matrix.id}
                    className="bg-white rounded-2xl border border-gray-200 p-5 md:p-6 
                    hover:shadow-md transition-all duration-300 hover:border-gray-300
                    group hover:-translate-y-1"
                >
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#172536] to-[#2d3f5a] 
                          group-hover:from-[#2d3f5a] group-hover:to-[#172536] transition-all duration-300">
                        {iconMap[matrix.type] || iconMap.default}
                    </div>

                    <h4 className="mt-5 font-bold text-sm text-gray-600 ">
                        {matrix.name}
                    </h4>

                    <div className="flex items-end justify-between mt-5">
                        <div>
                            {/* <span className="text-sm text-gray-600 font-medium">
                                {matrix.name}
                            </span> */}
                            <h4 className="mt-2 font-bold text-2xl text-gray-900">
                                {matrix.count.toLocaleString()}
                            </h4>
                        </div>

                        <Badge variant={matrix.type}>
                            {matrix.growingRate}
                        </Badge>
                    </div>

                    {/* Optional: Add a subtle progress indicator */}
                    <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full rounded-full ${matrix.type === 'default' ? 'bg-blue-500' :
                                matrix.type === 'success' ? 'bg-green-500' :
                                    matrix.type === 'warning' ? 'bg-yellow-500' :
                                        'bg-gray-400'
                                }`}
                            style={{ width: `${Math.min(matrix.count / 5, 100)}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}