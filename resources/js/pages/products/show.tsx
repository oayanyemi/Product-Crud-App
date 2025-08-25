import React from 'react';
import { Head, Link, usePage, router } from '@inertiajs/react';
import AppLayout from '../../layouts/app-layout';

type Product = {
    id: number;
    name: string;
    price: string;
    image_path?: string | null;
    description?: string | null;
};

type PageProps = { product: Product };

export default function ShowProduct() {
    const { props } = usePage<PageProps>();
    const { product } = props;

    const destroy = () => {
        if (confirm('Delete this product?')) {
            router.delete(route('products.destroy', product.id));
        }
    };

    return (
        <AppLayout>
            <Head title={product.name} />
            <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">{product.name}</h1>
                    <div className="flex gap-3">
                        <Link href={route('products.edit', product.id)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Edit
                        </Link>
                        <button onClick={destroy} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                            Delete
                        </button>
                    </div>
                </div>

                <div className="max-w-4xl space-y-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Product Details</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Price:</span>
                                        <span className="ml-2 text-lg text-gray-900 dark:text-white">${Number(product.price).toFixed(2)}</span>
                                    </div>
                                    {product.description && (
                                        <div>
                                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Description:</span>
                                            <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{product.description}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {product.image_path && (
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Product Image</h3>
                                    <img 
                                        src={route('home') + 'storage/' + product.image_path} 
                                        alt={product.name} 
                                        className="w-full max-w-sm rounded-lg border border-gray-200 dark:border-gray-700" 
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex justify-start">
                        <Link href={route('products.index')} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Back to Products
                        </Link>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}


