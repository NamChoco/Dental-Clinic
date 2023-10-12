
import { Col, Row, Card, Statistic, Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import tooth from '../asset/tooth.jpg';
import fill from '../asset/fill.jpg';
import tartar from '../asset/tarr.jpg';


const buttonContainerStyle = {
  display: 'flex',
  marginLeft: '235px',
};

const static1 = {
  marginTop: '10px',
};

const Dentral = () =>  (
 
  <>
    <Col xs={24} sm={24} md={24} lg={24} xl={12}>
      <h1 style={{ fontSize: '30px', marginLeft: '20px' }}>รายการทันตกรรม</h1>
    </Col>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Card style={{ backgroundColor: '#F5F5F5' }}>
        <Row>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: -1 }}>
            <Card bordered={false}>
              <h1>อุดฟัน</h1>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <img
                  src={fill}
                  alt="Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '5%' }}
                />
              </div>
              <div style={static1}>
                <Statistic title="ราคา" value={1000} prefix="$" />
              </div>
              <div style={buttonContainerStyle}>
                <Link to="/Card">
                  <Button type="primary" key="fill">
                    จองเลย!
                    <span
                      style={{
                        fontSize: '10px',
                        marginLeft: '10px',
                      }}
                    >
                      <RightCircleOutlined />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 2 }} lg={{ span: 6, offset: 2 }}>
            <Card bordered={false}>
              <h1>ถอนฟัน</h1>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <img
                  src={tooth}
                  alt="Logo"
                  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: '5%' }}
                />
              </div>
              <div style={static1}>
                <Statistic title="ราคา" value={2000} valueStyle={{ color: 'black' }} prefix="$" />
              </div>
              <div style={buttonContainerStyle}>
                <Link to="/Card">
                  <Button type="primary" key="tooth">
                    จองเลย!
                    <span
                      style={{
                        fontSize: '10px',
                        marginLeft: '10px',
                      }}
                    >
                      <RightCircleOutlined />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            <Card>
              <h1>ขูดหินปูน</h1>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                <img
                  src={tartar}
                  alt="Logo"
                  style={{ maxWidth: '100%', maxHeight: '150%', borderRadius: '5%' }}
                />
              </div>
              <div style={static1}>
                <Statistic title="ราคา" value={500} valueStyle={{ color: 'black' }} prefix="$" />
              </div>
              <div style={buttonContainerStyle}>
                <Link to="/Card">
                  <Button type="primary" key="tarr">
                    จองเลย!
                    <span
                      style={{
                        fontSize: '10px',
                        marginLeft: '10px',
                      }}
                    >
                      <RightCircleOutlined />
                    </span>
                  </Button>
                </Link>
              </div>
            </Card>
          </Col>
        </Row>
      </Card>
     
    </Col>
  </>
);

export default Dentral;
