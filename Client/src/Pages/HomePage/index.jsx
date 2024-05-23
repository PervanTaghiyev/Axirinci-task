import React from "react";
import { Card } from "antd";
const { Meta } = Card;
import { Col, Row } from "antd";
import { Helmet } from "react-helmet";

import { getAllData } from "../../services";

const HomePage = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllData().then((res) => {
      setProducts(res.data.data);
    });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>HOME PAGE</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div id="homepage">
        <div className="container"></div>
      </div>
      <section id="arrivals">
        <div className="container">
          <h2>New Arrivals</h2>
          <div className="tabs">
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
          </div>
          <div className="cards">
            <Row gutter={16}>
              {products &&
                products.map((p) => {
                  return (
                    <Col
                      className="gutter-row"
                      span={6}
                      key={p._id}
                      xs={24}
                      md={16}
                      lg={6}
                    >
                      <div>
                        <Card
                          hoverable
                          cover={<img alt="example" src={p.imageUrl} />}
                        >
                          <Meta title={p.title} />
                          <div className="spans">
                            <span>${p.newPrice}</span>
                            <span className="oldprice">{p.oldPrice}</span>
                          </div>
                        </Card>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
