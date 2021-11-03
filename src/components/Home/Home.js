import React, { useState } from 'react';
import { Tabs, DatePicker, Space, Slider, Row, Col, Card, Button, Typography,
    Drawer, Form, Input, Select, Radio } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Text, Title } = Typography;
const { Option } = Select

function Home() {
    const fecha = new Date();
    const [Value, setValue] = useState(fecha.getDate());
    const [Visible, setVisible] = useState(false);
    const [Pagado, setPagado] = useState('Pagado')

    function onChange(date, dateString) {
        setValue(dateString);
    }

    function showDrawer () {
        setVisible(true);
    };
    
    function onClose () {
        setVisible(false);
    };

    function onChange4(data) {
        setPagado('data');
        console.log(data);
    }

    return (
        <>
            <Tabs defaultActiveKey="1" type="card" size={'large'} centered>
                <TabPane tab="Diario" key="1" >
                    <Row gutter={[16, 34]} justify="center" align="middle">
                        <Col flex="auto">
                        </Col>
                        <Col flex="auto">
                            <DatePicker onChange={onChange} size={'large'} />
                        </Col>
                        <Col span={24}>
                            <Card>
                                <Card.Grid style={{width: '50%',textAlign: 'center'}}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={3} autoSize={{minRows: 3, maxRows: 5}}>Utilidad Total</Title>
                                            <Title level={3}>$150,000.00</Title>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                                <Card.Grid style={{width: '50%',textAlign: 'center'}}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={4} autoSize={{minRows: 3, maxRows: 5}}>Ventas Totales</Title>
                                            <Text type="success">$150,000.00</Text>
                                            <Title level={4} autoSize={{minRows: 3, maxRows: 5}}>Ventas Totales</Title>
                                            <Text type="danger">$150,000.00</Text>
                                        </Col>
                                    </Row>
                                </Card.Grid>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Button type="primary" block onClick={showDrawer} icon={<PlusOutlined />}>Nueva venta</Button>
                        </Col>
                        <Col span={12}>
                            <Button type="danger" block>Nuevo Gasto</Button>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Semanal" key="2">
                    <Space direction="horizontal" centered>
                        <DatePicker onChange={onChange} picker="week" />
                    </Space>
                </TabPane>
                <TabPane tab="Mensual" key="3">
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="month" />
                    </Space>
                </TabPane>
                <TabPane tab="Anual" key="4">
                    <Space direction="vertical">
                        <DatePicker onChange={onChange} picker="year" />
                    </Space>
                </TabPane>
            </Tabs>


            <Drawer 
                title="Nueva Venta" 
                width={'100%'} 
                onClose={onClose} 
                visible={Visible} 
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Hola
                        </Button>
                    </Space>
                }>
                <Form layout="vertical" hideRequiredMark>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item rules={[{ required: true, message: 'Please enter url' }]}>
                                <DatePicker onChange={onChange} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item rules={[{ required: true, message: 'Please enter user name' }]}>
                                <Radio.Group
                                    options={[{label: 'Pagado', value: 'Pagado'},{label: 'Crédito', value: 'Crédito'}]}
                                    onChange={onChange4}
                                    defaultValue={Pagado}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="owner" label="Owner" rules={[{ required: true, message: 'Please select an owner' }]}>
                                <Select placeholder="Please select an owner">
                                    <Option value="xiao">Xiaoxiao Fu</Option>
                                    <Option value="mao">Maomao Zhou</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="type" label="Type" rules={[{ required: true, message: 'Please choose the type' }]}>
                            <Select placeholder="Please choose the type">
                                <Option value="private">Private</Option>
                                <Option value="public">Public</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                            name="approver"
                            label="Approver"
                            rules={[{ required: true, message: 'Please choose the approver' }]}
                            >
                            <Select placeholder="Please choose the approver">
                                <Option value="jack">Jack Ma</Option>
                                <Option value="tom">Tom Liu</Option>
                            </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="dateTime" label="DateTime" rules={[{ required: true, message: 'Please choose the dateTime' }]}>
                                <DatePicker.RangePicker style={{ width: '100%' }} getPopupContainer={trigger => trigger.parentElement}/>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="description" label="Description" rules={[{required: true, message: 'please enter url description'}]}>
                                <Input.TextArea rows={4} placeholder="please enter url description" />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    )
}

export default Home
