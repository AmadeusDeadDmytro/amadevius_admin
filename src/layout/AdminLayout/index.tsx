import React, {useContext} from "react";
import {Helmet} from "@components/Helmet";
import {Button, Col, Dropdown, Icon, Layout, Menu, Row} from "antd";
import style from './index.module.scss'
import cls from 'classnames';
import {GlobalContext} from "@/context/global";
import {useSetting} from "@/hooks/useSetting";
import Link from "next/link";
import {menus} from "@/layout/AdminLayout/menus";
import {UserInfo} from "@components/UserInfo";

const { Sider, Content } = Layout

const ResourceCreate = ({ collapsed = false }) => {
    const menu = (
        <Menu>
            <Menu.Item>
                <Link href={'/article/editor'}>
                    <a target="_blank">
                        <span>Новая статья</span>
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href={'/page/editor'}>
                    <a target="_blank">
                        <span>Новая страница</span>
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    )
    return (
        <Dropdown overlay={menu} placement={'bottomLeft'}>
            <Button style={{width: '100%'}} type={'primary'} size={'large'} icon={'plus'}>
                {!collapsed && 'Создать'}
            </Button>
        </Dropdown>
    )
}

export const AdminLayout: React.FC = ({ children }) => {
    const {collapsed, toggleCollapse} = useContext(GlobalContext)
    const setting = useSetting()

    return (
        <>
            <Helmet />
            <Layout className={style.container}>
                <Sider className={style.asider} trigger={null} collapsible={true} collapsed={collapsed}>
                    <div className={style.logo}>
                        {setting.systemFavicon && <img src={setting.systemFavicon} />}
                        {!collapsed && <span style={{ marginLeft: 4 }}>Админ панель</span>}
                    </div>
                    <div className={style.resourceCreate}>
                        <ResourceCreate />
                    </div>
                    <Menu theme={'dark'} mode={'inline'}>
                        {menus
                            .filter((m: any) => !m.ignore)
                            .map((menu) => {
                                return menu.divider ? (
                                    <div className={style.divider}></div>
                                ) : (
                                    <Menu.Item>
                                        <Link href={menu.path}>
                                            <a
                                                //TODO: make active menu
                                                // className={cls({
                                                //     [style.active]: activeMenu && activeMenu.path === menu.path,
                                                // })}
                                            >
                                                <Icon type={menu.icon} />
                                                <span>{menu.label}</span>
                                            </a>
                                        </Link>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className={style.main}>
                    <header>
                        <Row>
                            <Col span={12}>
                                <Icon
                                    className={'trigger'}
                                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={toggleCollapse}
                                />
                            </Col>
                            <Col span={12} style={{textAlign: 'right'}}>
                                <div className={style.info}>
                                    <a href="#" className={style.github}>
                                        <Icon type={'github'}/>
                                    </a>
                                    <UserInfo />
                                </div>
                            </Col>
                        </Row>
                    </header>
                </Layout>
            </Layout>
        </>
    )
}
//TODO: Finish this