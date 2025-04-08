// UploadImage.js
import React, { useState } from 'react'
import { supabase } from '../supabaseClient'

const UploadImage = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState(null) // 👈 holds the public image URL

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image to upload')
      return
    }

    setUploading(true)

    const fileExt = file.name.split('.').pop()
    const fileName = `${Date.now()}.${fileExt}`

    const { data, error } = await supabase.storage
      .from('safehaven-images') // change to your bucket name
      .upload(`profile-pics/${fileName}`, file)

    setUploading(false)

    if (error) {
      console.error('Upload error:', error.message)
      alert('Upload failed!')
    } else {
      const { data: publicURL } = supabase
        .storage
        .from('safehaven-images')
        .getPublicUrl(`profile-pics/${fileName}`)

      setImageUrl(publicURL.publicUrl) // 👈 update state to trigger re-render
      alert('Upload successful!')
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Upload your profile image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <br />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>

      {/* 👇 Display the uploaded image if imageUrl is set */}
      {imageUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" width="250" style={{ borderRadius: '10px' }} />
        </div>
      )}
    </div>
  )
}

export default UploadImage
