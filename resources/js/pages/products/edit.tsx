import React from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import AppLayout from '../../layouts/app-layout';

type Product = {
    id: number;
    name: string;
    price: string;
    image_path?: string | null;
    description?: string | null;
};

type PageProps = { product: Product };

export default function EditProduct() {
    const { props } = usePage<PageProps>();
    const { product } = props;

    const { data, setData, post, processing, errors } = useForm({
        _method: 'put' as const,
        name: product.name,
        price: product.price,
        image: null as File | null,
        description: product.description ?? '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.update', product.id));
    };

    return (
        <AppLayout>
            <Head title={`Edit ${product.name}`} />
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Edit Product</h1>
                </div>
                <form onSubmit={submit} className="max-w-2xl space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                        <input 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                            value={data.name} 
                            onChange={(e) => setData('name', e.target.value)} 
                        />
                        {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price</label>
                        <input 
                            type="number" 
                            step="0.01" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                            value={data.price} 
                            onChange={(e) => setData('price', e.target.value)} 
                        />
                        {errors.price && <div className="text-sm text-red-600 mt-1">{errors.price}</div>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image (optional)</label>
                        <input 
                            type="file" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                            onChange={(e) => setData('image', e.target.files?.[0] ?? null)} 
                        />
                        {errors.image && <div className="text-sm text-red-600 mt-1">{errors.image}</div>}
                        {product.image_path && (
                            <div className="mt-2">
                                <span className="text-sm text-gray-500 dark:text-gray-400">Current image:</span>
                                <img 
                                    src={route('home') + 'storage/' + product.image_path} 
                                    alt="Current" 
                                    className="mt-1 w-20 h-20 object-cover rounded border" 
                                />
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                        <textarea 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                            rows={4}
                            value={data.description} 
                            onChange={(e) => setData('description', e.target.value)} 
                        />
                        {errors.description && <div className="text-sm text-red-600 mt-1">{errors.description}</div>}
                    </div>
                    <div className="flex items-center gap-3 pt-4">
                        <Link href={route('products.show', product.id)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Cancel
                        </Link>
                        <button disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}


