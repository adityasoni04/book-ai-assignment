import React from "react";
import { Table, Card } from "antd";

const columns = [
    {
        title: "API",
        dataIndex: "api",
        key: "api",
    },
    {
        title: "Model",
        dataIndex: "model",
        key: "model",
    },
    {
        title: "Price Per 1K Tokens",
        dataIndex: "price",
        key: "price",
    },
];

const data = [
    {
        key: "1",
        api: "OpenAI",
        model: "GPT-3.5",
        price: "$0.002",
    },
    {
        key: "2",
        api: "OpenAI",
        model: "GPT-4",
        price: "$0.03",
    },
    {
        key: "3",
        api: "Together AI",
        model: "Llama-2-70b",
        price: "$0.0008",
    },
    {
        key: "4",
        api: "Together AI",
        model: "Llama-2-13b",
        price: "$0.0006",
    },
];

const Pricing = ({ theme }) => {
    return (
        <Card
            title={<span className={`custom-card-title ${theme}`}>API Pricing</span>}
            bordered={false}
            className={`pricing-card ${theme}`}
        >
            <h4>
                Our API pricing is based on the model used and the number of tokens
                processed. Here's a breakdown of the costs:
            </h4>

            <Table columns={columns} dataSource={data} pagination={false} />

            <h2 className="custom-heading">Token Estimation</h2>
            <h5 className={`custom-info ${theme}`}>
                On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
            </h5>

            <h2 className="custom-heading">Billing</h2>
            <h5 className={`custom-info ${theme}`}>
                This section provides further details and explanations about our pricing model, including any discounts or special conditions that may apply. For more information, please contact our support team.
            </h5>
        </Card>
    );
};

export default Pricing;
