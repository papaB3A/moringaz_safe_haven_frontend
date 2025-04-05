// UploadImage.js
import React, { useState } from 'react'
import { supabase } from '../supabaseClient';
// import { SupabaseClient } 

const UploadImage = () => {
  const [file, setFile] = useState(null)
  const [uploading, setUploading] = useState(false)

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
      .from('safehaven-images') // your bucket name
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
        
      console.log('Uploaded image public URL:', publicURL.publicUrl)
      alert('Upload successful!')
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
    </div>
  )
}

export default UploadImage
