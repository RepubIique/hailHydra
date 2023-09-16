import { Container, Row, Col, Card, Table } from 'react-bootstrap'
import '../styles/productPage.css'

export const ProductPage = ({ props }) => (
    <Container className="product-container">
        <Row>
            <Col xs={12} md={6}>
                <img
                    loading="lazy"
                    src={props.image}
                    alt={props.name}
                    className="product-image"
                />
            </Col>
            <Col xs={12} md={6}>
                <Row>
                    <Card className="product-card">
                        <h2 className="product-title">{props.name}</h2>
                        <p>{props.overview}</p>
                    </Card>
                </Row>
                <br />
                <Row>
                    <Card className="product-card">
                        <h3 className="product-title">Common Applications</h3>
                        <ul className="product-list">
                            {props.commonApplication.map(
                                (application, index) => (
                                    <li key={index}>{application}</li>
                                )
                            )}
                        </ul>
                    </Card>
                </Row>
            </Col>
        </Row>
        <br />
        {props.keyFeatures ? (
            <Row>
                <Col>
                    <Card className="product-card">
                        <h3 className="product-title">Key Features</h3>
                        <ul className="product-list">
                            {props.keyFeatures.map((feature, index) => (
                                <li key={index}>
                                    <strong>{feature.name}: </strong>
                                    {feature.description}
                                </li>
                            ))}
                        </ul>
                    </Card>
                </Col>
            </Row>
        ) : null}
        <br />
        <Row>
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Chemical Composition</h3>
                    <ul className="product-list">
                        {Object.entries(props.chemicalComposition).map(
                            ([key, value], index) => (
                                <li key={index}>
                                    <strong>{key}: </strong>
                                    {value}
                                </li>
                            )
                        )}
                    </ul>
                </Card>
            </Col>
            {props.mechanicalProperties ? (
                <Col>
                    <Card className="product-card">
                        <h3 className="product-title">Mechanical Properties</h3>
                        <ul className="product-list">
                            {Object.entries(props.mechanicalProperties).map(
                                ([key, value], index) => (
                                    <li key={index}>
                                        <strong>{key}: </strong>
                                        {value}
                                    </li>
                                )
                            )}
                        </ul>
                    </Card>
                </Col>
            ) : null}
        </Row>
        <br />
        {props.heatTreatment ? (
            <Row>
                <Col>
                    <Card className="product-card">
                        <h3 className="product-title">Heat Treatment</h3>
                        <ul className="product-list">
                            {Object.entries(props.heatTreatment).map(
                                ([key, value], index) => (
                                    <li key={index}>
                                        <strong>{key}: </strong>
                                        <ul>
                                            {Object.entries(value).map(
                                                (
                                                    [subKey, subValue],
                                                    subIndex
                                                ) => (
                                                    <li key={subIndex}>
                                                        <strong>
                                                            {subKey}:{' '}
                                                        </strong>{' '}
                                                        {subValue}
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </li>
                                )
                            )}
                        </ul>
                    </Card>
                </Col>
            </Row>
        ) : null}

        <br />
        {props.mechanicalPropertiesTable ? (
            <Row>
                <Col>
                    <Card className="product-card">
                        <Table responsive striped="columns">
                            <thead>
                                <tr>
                                    <th>Mechanical Conditions</th>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <th key={index}>
                                                {property.condition}
                                            </th>
                                        )
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Ruling section mm</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {property.rulingSection_mm}
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Tensile Strength Mpa</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {
                                                    property.tensileStrength_Mpa
                                                        .min
                                                }{' '}
                                                -{' '}
                                                {
                                                    property.tensileStrength_Mpa
                                                        .max
                                                }
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Yield Strength Mpa Min</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {property.yieldStrength_Mpa.min}
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Elongation Percent Min</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {
                                                    property.elongation_percent
                                                        .min
                                                }
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Izod Impact J Min</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {property.izodImpact_J.min}
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Charpy Impact J Min</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {property.charpyImpact_J.min}
                                            </td>
                                        )
                                    )}
                                </tr>
                                <tr>
                                    <td>Hardness Brinell HB</td>
                                    {props.mechanicalPropertiesTable.map(
                                        (property, index) => (
                                            <td key={index}>
                                                {
                                                    property.hardnessBrinell_HB
                                                        .min
                                                }{' '}
                                                -{' '}
                                                {
                                                    property.hardnessBrinell_HB
                                                        .max
                                                }
                                            </td>
                                        )
                                    )}
                                </tr>
                            </tbody>
                        </Table>
                    </Card>
                </Col>
            </Row>
        ) : null}
        {props.others ? (
            <Row>
                <Card className="product-card">
                    {Object.entries(props.others).map(([key, value], index) => (
                        <div key={index} md={6}>
                            <h5>{key}</h5>
                            <p>{value}</p>
                        </div>
                    ))}
                </Card>
            </Row>
        ) : null}
        <br />
        <Row>
            {props.relatedSpecifications ? (
                <Col>
                    <Card className="product-card">
                        <h3 className="product-title">
                            Related Specifications
                        </h3>
                        <ul className="product-list">
                            {Object.entries(props.relatedSpecifications).map(
                                ([key, value], index) => (
                                    <li key={index}>
                                        <strong>{key}: </strong>
                                        {value}
                                    </li>
                                )
                            )}
                        </ul>
                    </Card>
                </Col>
            ) : null}
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Availability</h3>
                    <p>{props.availability}</p>
                </Card>
            </Col>
            <Col>
                <Card className="product-card">
                    <h3 className="product-title">Conclusion</h3>
                    <p>{props.conclusion}</p>
                </Card>
            </Col>
        </Row>
    </Container>
)
