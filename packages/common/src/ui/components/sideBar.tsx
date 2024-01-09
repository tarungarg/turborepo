'use client'
import { Drawer, ListItem, ListItemText } from '@mui/material';

import { useRouter } from 'next/navigation'

interface List {
    name: string;
    path: string;
    header: string;
}

interface SideBarProps {
    list: List[]
    open: boolean
    setCurrentHeader: Function,
    setOpen: Function,
    placement: any
}

const SideBar = ({ list, open, setCurrentHeader, setOpen, placement }: SideBarProps) => {
    const router = useRouter()

    const onItemClick = (item: { header: string, name: string, path: string }) => {
        setCurrentHeader(item.header)
        router.push(item.path)
    }

    const getList = () => (
        <div style={{ width: 250 }} onClick={() => setOpen(false)}>
            {list.map((item, index) => (
                <ListItem button key={index}>
                    <ListItemText onClick={() => onItemClick(item)} primary={item.name} />
                </ListItem>
            ))}
        </div>
    )

    return (
        <Drawer open={open} anchor={placement} onClose={() => setOpen(false)}>
            {getList()}
        </Drawer>
    )
}

export default SideBar