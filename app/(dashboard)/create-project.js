import React from 'react';
import { useDropzone } from 'react-dropzone';

const UploadPDF = () => {
    const onDrop = (acceptedFiles) => {
        // Xử lý tệp PDF sau khi người dùng tải lên. acceptedFiles là một mảng chứa các tệp đã chấp nhận.
        // Ví dụ: bạn có thể gửi tệp PDF lên máy chủ ở đây.
        console.log(acceptedFiles);
    };

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: '.pdf', // Chấp nhận tệp có định dạng .pdf
    });

    return (
        <div>
            <h3>Upload PDF File</h3>
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop a PDF file here, or click to select one</p>
            </div>
        </div>
    );
};

export default UploadPDF;
