import Link from 'next/link';
import currency from 'currency.js';
import { Divider, TableColumnsType, Typography } from 'antd';
import { ProductItem } from 'models';

type GetColumns = (props: {
	current: number;
	pageSize: number;
}) => TableColumnsType<ProductItem>;

export const getColumns: GetColumns = ({ current, pageSize }) => [
	{
		key: '',
		dataIndex: '',
		title: 'Number',
		render(_value, _record, index) {
			return (
				<Typography.Text>{(current - 1) * pageSize + index + 1}</Typography.Text>
			);
		},
	},
	{
		key: 'brand',
		dataIndex: 'brand',
		title: 'Brand',
	},
	{
		key: 'title',
		dataIndex: 'title',
		title: 'Details',
		sorter: (a, b) => (a.title > b.title ? 1 : -1),
		render(_value, record) {
			return (
				<Link href={`products/${record.id}`}>
					<Typography.Title level={4}>{record.title}</Typography.Title>
					<Typography.Text>{record.description}</Typography.Text>
				</Link>
			);
		},
	},
	{
		key: 'rating',
		dataIndex: 'rating',
		title: 'Rating',
		sorter: (a, b) => a.rating - b.rating,
	},
	{
		key: 'stock',
		dataIndex: 'stock',
		title: 'Stock',
	},
	{
		key: 'price',
		dataIndex: 'price',
		title: 'Price (with discounts)',
		width: '160px',
		align: 'center',
		sorter: (a, b) =>
			(a.price * a.discountPercentage) / 100 -
			(b.price * b.discountPercentage) / 100,
		render(_value, record) {
			return (
				<>
					<Typography.Text>
						{currency(record.price)
							.multiply(record.discountPercentage)
							.divide(100)
							.format()}
					</Typography.Text>
					<Divider type='vertical' />
					<Typography.Text delete>
						{currency(record.price).format({ symbol: '' })}
					</Typography.Text>
				</>
			);
		},
	},
];
