import React from 'react';
import { Container, Row, Col, Input, Table } from 'reactstrap';
import { ProductService } from '../../services';
import Select from 'react-select';
import './List.css';

class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            parameters: {
                searchValue: '',
                type: 'Description'
            },
            products: [],
            selectedType: {}
        }
    }

    // Once the UI is rendered, trigger the function to receive all products at once
    componentDidMount() {
        this.getProducts();
    }

    // Mmakes the API call to get products based off of parameters
    async getProducts() {
        let { parameters } = this.state;
        try {
            let response = await ProductService.getProducts(parameters);
            let result = response && response.data && response.data.result;
            this.setState({
                products: result
            });
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    // Updates paramaters for API call after each character input
    async onSearchChange(event) {
        let { parameters } = this.state;
        this.setState({
            parameters: {
                ...parameters,
                searchValue: event.target.value
            }
        }, function () { /* Callback function to make API call for products */
            this.getProducts();
        })
    }

    async onTypeChange(event) {
        let { parameters } = this.state;
        this.setState({
            parameters: {
                ...parameters,
                type: event.value,
                searchValue: ''
            },
            selectedType: event
        }, function () {
            this.getProducts();
        })
    }
    
    render() {
        let { parameters, products, selectedType } = this.state;
        let typeOptions = [
            {
                value: 'descripton', 
                label: 'Description'
            },
            {
                value: 'last_sold',
                label: 'Last Sold'
            },
            {
                value: 'shelf_life',
                label: 'Shelf Life'
            },
            {
                value: 'department',
                label: 'Department'
            },
            {
                value: 'price',
                label: 'Price'
            },
            {
                value: 'unit',
                label: 'Unit'
            },
            {
                value: 'xFor',
                label: 'XFor'
            },
            {
                value: 'cost',
                label: 'Cost'
            },
            {
                value: 'id',
                label: 'ID'
            }
        ]

        return (
            <Container className="list-container">
                <Row>
                    <Col xs={{size: 4, offset: 1}}>
                        <Select
                            onChange={(event) => this.onTypeChange(event)}
                            options={typeOptions}
                            value={selectedType && selectedType.label}
                            placeholder={selectedType && selectedType.label ? `${selectedType.label}` : 'Description'}
                        />
                    </Col>
                    <Col xs={{size: 6}}>
                        <Input
                            onChange={(event) => this.onSearchChange(event)}
                            value={parameters && parameters.searchValue}
                            placeholder={selectedType && selectedType.label ? `Search by ${selectedType.label}` : 'Search by Description'}
                        />
                    </Col>
                </Row>
                <Row className="table-section">
                    <Col xs={12}>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Description</th>
                                    <th>Last Sold</th>
                                    <th>Shelf Life</th>
                                    <th>Department</th>
                                    <th>Price</th>
                                    <th>Unit</th>
                                    <th>XFor</th>
                                    <th>Cost</th>
                                </tr>
                            </thead>
                            {products && products.map(product => {
                                return <tbody>
                                            <tr>
                                                <td>{product && product.ID}</td>
                                                <td>{product && product.Description}</td>
                                                <td>{product && product.lastSold}</td>
                                                <td>{product && product.ShelfLife}</td>
                                                <td>{product && product.Department}</td>
                                                <td>{product && product.Price}</td>
                                                <td>{product && product.Unit}</td>
                                                <td>{product && product.xFor}</td>
                                                <td>{product && product.Cost}</td>
                                            </tr>
                                        </tbody>
                                })}
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default List;