import React from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
import AppLayout from '../../layouts/app-layout';

type Product = {
    id: number;
    name: string;
    price: string;
    image_path?: string | null;
    description?: string | null;
};

type PageProps = {
    products: {
        data: Product[];
        links: { url: string | null; label: string; active: boolean }[];
    };
};

export default function ProductsIndex() {
    const { props } = usePage<PageProps>();
    const { products } = props;

    return (
        <AppLayout>
            <Head title="Products" />
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Products</h1>
                    <Link href={route('products.create')} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        New Product
                    </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {products.data.map((p) => (
                        <Link key={p.id} href={route('products.show', p.id)} className="block p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div className="font-medium text-gray-900 dark:text-white mb-2">{p.name}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">${Number(p.price).toFixed(2)}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}


