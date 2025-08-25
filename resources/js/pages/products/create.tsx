import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AppLayout from '../../layouts/app-layout';

export default function CreateProduct() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        image: null as File | null,
        description: '',
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store'));
    };

    return (
        <AppLayout>
            <Head title="Create Product" />
            <div className="p-6">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Create Product</h1>
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
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image</label>
                        <input 
                            type="file" 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white" 
                            onChange={(e) => setData('image', e.target.files?.[0] ?? null)} 
                        />
                        {errors.image && <div className="text-sm text-red-600 mt-1">{errors.image}</div>}
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
                        <Link href={route('products.index')} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                            Cancel
                        </Link>
                        <button disabled={processing} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors">
                            Create Product
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}


