import axios from 'axios';

// Set the base URL for your API
const API = axios.create({
    baseURL: 'http://192.168.1.10:8000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a category
export const addCategory = async (categoryData) => {
    try {
        // Create FormData object
        const formData = new FormData();

        // Append all category data to FormData
        formData.append('title', categoryData.name);
        formData.append('description', categoryData.description);
        formData.append('endtime', categoryData.endtime);
        formData.append('playcoin', categoryData.playcoin);
        formData.append('wincoin', categoryData.wincoin);

        // Handle image data
        if (categoryData.image) {
            // Convert base64 to blob
            const base64Data = categoryData.image.split(',')[1];
            const blob = await fetch(categoryData.image).then(res => res.blob());
            formData.append('image', blob, 'image.jpg');
        }

        const response = await API.post('/category', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }
};

// Fetch categories
export const getCategories = async () => {
    try {
        const response = await API.get('/category');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};

// Fetch category by ID
export const getCategoryById = async (id) => {
    try {
        const response = await API.get(`/category/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};

// Update category by ID
export const updateCategoryById = async (id, data) => {
    try {
        const response = await API.put(`/category/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Failed to update category:', error);
        throw error;
    }
};



// Add a setting
export const addsetting = async (settingData) => {
    try {
        // Create FormData object (if the data needs to be sent as multipart)
        const formData = new FormData();

        // Append setting data to FormData
        formData.append('title', settingData.title);
        formData.append('backgroundColor', settingData.backgroundColor);
        formData.append('cardColor', settingData.cardColor);
        formData.append('borderColor', settingData.borderColor);
        formData.append('headingTextColor', settingData.headingTextColor);
        formData.append('textColor', settingData.textColor);
        formData.append('titleButtonColor', settingData.titleButtonColor);
        formData.append('correctAnswerButtonColor', settingData.correctAnswerButtonColor);
        formData.append('wrongAnswerButtonColor', settingData.wrongAnswerButtonColor);
        formData.append('loginButtonColor', settingData.loginButtonColor);

        // Handle image upload if necessary (assuming image is part of settingData)
        if (settingData.image) {
            const base64Data = settingData.image.split(',')[1];
            const blob = await fetch(settingData.image).then(res => res.blob());
            formData.append('image', blob, 'logo.jpg');
        }

        // Make the API request
        const response = await API.post('/setting', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data; // Return the response data
    } catch (error) {
        console.error('Error adding setting:', error);
        throw error; // Rethrow the error to handle it elsewhere
    }
};
