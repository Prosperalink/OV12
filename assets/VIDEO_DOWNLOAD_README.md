# Orson Vision Website - Video Download with Resume Functionality

## Overview

This enhanced asset downloader supports video downloads with resume capability, allowing you to continue interrupted downloads from where they left off. Perfect for downloading large video files that may be interrupted due to network issues or system shutdowns.

## Features

### 🎬 Video Download with Resume
- **Resume Capability**: Automatically resumes interrupted downloads from the last saved position
- **Progress Tracking**: Real-time progress bars for video downloads using `tqdm`
- **File Size Validation**: Checks if existing files are complete before skipping
- **Rate Limiting**: Intelligent rate limiting for large video files

### 📊 Enhanced Progress Tracking
- **Real-time Progress**: Visual progress bars for video downloads
- **Time Estimates**: Accurate time remaining calculations
- **Section Progress**: Track progress across multiple sections
- **Asset Counting**: Count total assets downloaded

### 🛡️ Robust Error Handling
- **Network Resilience**: Handles network interruptions gracefully
- **File Validation**: Validates downloaded files for completeness
- **Retry Logic**: Automatic retry for failed downloads
- **Graceful Degradation**: Continues with remaining assets if some fail

## Installation

### Prerequisites
- Python 3.7 or higher
- Internet connection for downloading assets

### Quick Start
1. Navigate to the `website_assets` directory
2. Run the automated setup:
```bash
python run_download.py
```

### Manual Installation
1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the downloader:
```bash
python download_with_progress.py
```

## Usage

### Basic Usage
```python
from download_with_progress import EnhancedAssetDownloader

# Create downloader instance
downloader = EnhancedAssetDownloader()

# Run full download process
downloader.run_download()
```

### Custom Download
```python
# Download specific section
downloader.process_section("homepage", "hero_section", "videos", count=3)

# Download with custom resume
downloader.download_asset_with_resume(url, filepath, is_video=True)
```

## Video Resume Functionality

### How It Works
1. **File Check**: Before downloading, checks if file already exists
2. **Size Validation**: Compares existing file size with expected size
3. **Resume Position**: Uses HTTP Range headers to resume from last position
4. **Progress Tracking**: Shows real-time progress with `tqdm`
5. **Completion Check**: Validates final file size for completeness

### Resume Process
```python
# Example resume process
def download_asset_with_resume(self, url: str, filepath: Path, is_video: bool = False):
    # Check existing file
    resume_pos = 0
    if filepath.exists():
        resume_pos = filepath.stat().st_size
        if resume_pos > 0:
            headers['Range'] = f'bytes={resume_pos}-'
    
    # Download with progress bar for videos
    if is_video and total_size > 0:
        with tqdm(total=total_size, initial=resume_pos) as pbar:
            # Download chunks with progress updates
```

## Directory Structure

The downloader creates a comprehensive directory structure:

```
website_assets/
├── homepage/
│   ├── hero_section/
│   │   ├── images/
│   │   └── videos/
│   └── solutions_matrix/
│       ├── digital_innovation/
│       │   ├── images/
│       │   └── videos/
│       └── ...
├── about/
│   ├── hero/
│   │   ├── images/
│   │   └── videos/
│   └── ...
└── ...
```

## Video Sources

### Current Video URLs
The downloader uses high-quality, royalty-free videos from:
- **Vimeo**: Professional business and office videos
- **Pexels**: Creative and cinematic content
- **Public Domain**: Free-to-use commercial content

### Video Categories
- **Cinematic Office**: Professional workspace videos
- **Creative Team**: Team collaboration and creativity
- **Digital Innovation**: Technology and innovation themes
- **Creative Design**: Design and creative process
- **Content Creation**: Content production workflows
- **Technology Solutions**: Tech and digital solutions
- **Strategic Consulting**: Business and consulting themes

## Configuration

### Customizing Video Sources
Edit the `public_domain_videos` dictionary in `download_with_progress.py`:

```python
self.public_domain_videos = {
    "cinematic_office": [
        "https://your-video-url-1.mp4",
        "https://your-video-url-2.mp4",
        # Add more URLs
    ],
    # Add more categories
}
```

### Adjusting Download Parameters
```python
# Rate limiting (seconds)
time.sleep(random.uniform(2, 4))  # For videos
time.sleep(random.uniform(0.5, 1.5))  # For images

# File size tolerance (5% by default)
if file_size >= expected_size * 0.95:
    # Skip if file is 95% complete
```

## Error Handling

### Common Issues and Solutions

#### Network Interruptions
- **Automatic Resume**: Downloads automatically resume from last position
- **Retry Logic**: Failed downloads are retried automatically
- **Progress Preservation**: Progress is saved and restored

#### Incomplete Downloads
- **Size Validation**: Checks file size against expected size
- **Tolerance Setting**: Allows 5% tolerance for completion
- **Manual Resume**: Can manually resume interrupted downloads

#### Large File Handling
- **Chunked Downloads**: Downloads in 8KB chunks
- **Memory Efficient**: Doesn't load entire file into memory
- **Progress Tracking**: Real-time progress for large files

## Performance Optimization

### Download Optimization
- **Chunked Downloads**: 8KB chunks for optimal performance
- **Streaming**: Uses HTTP streaming for memory efficiency
- **Rate Limiting**: Prevents server overload
- **Parallel Processing**: Can be extended for parallel downloads

### Memory Management
- **Stream Processing**: Processes data in streams
- **Garbage Collection**: Automatic memory cleanup
- **File Buffering**: Efficient file I/O operations

## Monitoring and Logging

### Progress Tracking
```python
# Real-time progress updates
print(f"📊 Progress: {completed}/{total} ({percentage:.1f}%)")
print(f"⏱️  Elapsed: {elapsed_time}")
print(f"⏳ ETA: {estimated_remaining}")
```

### Logging Features
- **Section Progress**: Track progress per section
- **Asset Counting**: Count total assets downloaded
- **Time Tracking**: Track download duration
- **Error Logging**: Log failed downloads for retry

## Troubleshooting

### Common Problems

#### Import Errors
```bash
# Install missing dependencies
pip install requests tqdm pathlib2
```

#### Network Issues
- Check internet connection
- Verify video URLs are accessible
- Try with different network connection

#### File Permission Issues
- Ensure write permissions in target directory
- Check disk space availability
- Verify file system permissions

#### Resume Not Working
- Check if server supports HTTP Range headers
- Verify file size detection is working
- Check for file corruption

## Advanced Usage

### Custom Video Sources
```python
# Add custom video sources
custom_videos = {
    "custom_category": [
        "https://your-custom-video-1.mp4",
        "https://your-custom-video-2.mp4"
    ]
}
downloader.public_domain_videos.update(custom_videos)
```

### Batch Processing
```python
# Process multiple sections
sections = [
    ("homepage", "hero_section", "videos", 5),
    ("about", "mission", "videos", 3),
    # Add more sections
]

for page, section, media_type, count in sections:
    downloader.process_section(page, section, media_type, count)
```

### Custom Progress Callbacks
```python
# Custom progress tracking
def custom_progress_callback(current, total, filename):
    print(f"Downloading {filename}: {current}/{total} bytes")

# Integrate with downloader
downloader.custom_progress = custom_progress_callback
```

## Contributing

### Adding New Features
1. Fork the repository
2. Create feature branch
3. Add tests for new functionality
4. Submit pull request

### Reporting Issues
- Include error messages
- Provide system information
- Describe steps to reproduce
- Include log files if available

## License

This project is part of the Orson Vision website development and follows the same licensing terms as the main project.

## Support

For support and questions:
- Check the troubleshooting section
- Review error logs
- Test with smaller files first
- Verify network connectivity

---

**Note**: This enhanced downloader is specifically designed for the Orson Vision website's cinematic humanism theme, providing high-quality video assets that align with the brand's visual identity. 