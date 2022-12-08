import React, { useMemo, useState } from 'react';
import { Table, Typography, Input, Button, PaginationProps } from 'antd';
import { getProducts } from '@api';
import { ProductItem } from 'models';
import { getColumns } from './data';

export default function Products({ products }: ProductsParams) {
	const [pagination, setPagination] = useState({ current: 1, pageSize: 10 });

	const columns = useMemo(() => getColumns(pagination), [pagination]);
	return (
		<div>
			<Typography.Title>Products</Typography.Title>

			<Input.Group compact>
				<Input style={{ width: 'calc(100% - 77px)' }} />
				<Button type='primary'>Submit</Button>
			</Input.Group>

			<Table
				rowKey={(record) => record.id}
				dataSource={products}
				columns={columns}
				pagination={{
					...pagination,
					onChange(page, pageSize) {
						setPagination({ current: page, pageSize });
					},
				}}
			/>
		</div>
	);
}

export const getStaticProps = async () => {
	try {
		const {
			data: { products },
		} = await getProducts();

		return {
			props: {
				products,
			},
		};
	} catch (error) {
		return {
			props: {
				error: 'Something went wrong',
			},
		};
	}
};

interface ProductsParams {
	products: ProductItem[];
}
