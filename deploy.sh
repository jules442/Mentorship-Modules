#!/bin/bash

BUCKET="gs://indigo-luna-mentorship-program"

echo "Creating bucket..."
gsutil mb $BUCKET

echo "Setting public access..."
gsutil iam ch allUsers:objectViewer $BUCKET

echo "Uploading files..."
gsutil cp module-1-leadership-vision.html $BUCKET
gsutil cp module-2-communication-skills.html $BUCKET
gsutil cp styles.css $BUCKET

echo ""
echo "Done! Your modules are live at:"
echo "https://storage.googleapis.com/indigo-luna-mentorship-program/module-1-leadership-vision.html"
echo "https://storage.googleapis.com/indigo-luna-mentorship-program/module-2-communication-skills.html"
