import { useNavigate } from "react-router";


export const useMenuItems = () => {
    const navigate = useNavigate();
    
    return [
    {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
            navigate('/home');
        }
        
    },
    {
        label: 'Upload',
        icon: 'pi pi-upload',
        command: () => {
            navigate('/chooseCard');
        }
    },
    {
        label: 'View',
        icon: 'pi pi-images',
        command: () => {
            navigate('/cards');
        }
    },
]
};