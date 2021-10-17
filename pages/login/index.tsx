import {Button, Form, Icon, Input} from "antd";
import {FormComponentProps} from "antd/es/form";
import React, {useState} from "react";
import style from './index.module.scss'
import {Helmet} from "@components/Helmet";
import Link from "next/link";

type ILoginProps = FormComponentProps

const _Login: React.FC<ILoginProps> = ({ form }) => {
    const {getFieldDecorator} = form
    const [loading, setLoading] = useState(false);

    // TODO: make onSubmit function
    return (
        <div className={style.wrapper}>
            <Helmet>
                <title>Вход в систему</title>
            </Helmet>
            <div className={style.container}>
                <h2>Вход в систему</h2>

                <Form onSubmit={() => {}}>
                    <Form.Item label={'Имя пользователя'}>
                        {getFieldDecorator('name', {
                            rules: [{required: true, message: 'Пожалуйста, введите имя пользователя!'}]
                        })(
                            <Input
                                prefix={<Icon type={'user'}  style={{ color: 'rgba(0,0,0,.25)' }}/>}
                                size={'large'}
                                placeholder={'Пожалуйста, введите имя пользователя!'}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Пароль">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Пожалуйста, введите пароль!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                size="large"
                                placeholder="Пожалуйста, введите пароль!'"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            size="large"
                            style={{ width: '100%' }}
                            loading={loading}
                            disabled={loading}
                        >
                            Подтвердить
                        </Button>
                        Или{' '}
                        <Link href="/register">
                            <a>зарегистрироваться</a>
                        </Link>
                    </Form.Item>
                </Form>
            </div>
            <ul className={style.bubbles}>
                {Array.from({ length: 10 }).map((_, idx) => (
                    <li key={idx}></li>
                ))}
            </ul>
        </div>
    )
}

export default Form.create()(_Login)