import {
	Briefcase,
    ListTask,
    People,
    Bullseye
} from 'react-bootstrap-icons';

export const ProjectsStats = [
    {
       id: 1,
       title: "Dự án",
       value: 18,
       icon: <Briefcase size={18}/>,
       statInfo: '<span className="text-dark me-2">2</span> Đã hoàn thành' 
    },
    {
        id: 2,
        title: "Công việc đang thực hiện",
        value: 132,
        icon: <ListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">28</span> Đã hoàn thành' 
     },
     {
        id: 3,
        title: "Nhóm",
        value: 12,
        icon: <People size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Đã hoàn thành' 
     },
     {
        id: 4,
        title: "Hiệu suất làm việc",
        value: '76%',
        icon: <Bullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Đã hoàn thành' 
     }
];
export default ProjectsStats;
