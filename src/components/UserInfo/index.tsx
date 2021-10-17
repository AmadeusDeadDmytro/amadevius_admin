import {Avatar, Dropdown, Menu} from "antd";
import Link from "next/link";
import {useUser} from "@/hooks/useUser";

const menus = [
    {
        label: 'Мой кабинет\'',
        icon: 'user',
        path: '/ownspace',
    },
    {
        icon: 'user',
        label: 'Пользователи',
        path: '/user',
    },
    {
        icon: 'setting',
        label: 'Настройки',
        path: '/setting',
    },
];

const menu = () => {
    return (
        <Menu>
            {menus.map((menu) => (
                <Menu.Item>
                    <Link href={menu.path}>
                        <a>{menu.label}</a>
                    </Link>
                </Menu.Item>
            ))}
            <Menu.Item>
                <Link href="/login">
                    <a>Выйти</a>
                </Link>
            </Menu.Item>
        </Menu>
    );
};

export const UserInfo = () => {
    const user = useUser()

    return (
        <Dropdown overlay={menu}>
            <div>
                {user && user.avatar  ? (
                    <Avatar size={'small'} src={user.avatar}/>
                ) : (
                    <Avatar size={'small'} icon={'user'}/>
                )}
                {user ? <span style={{ marginLeft: 8 }}>Hi, {user.name}</span> : null}
            </div>
        </Dropdown>
    )
}

