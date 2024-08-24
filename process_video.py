import ffmpeg
import speech_recognition as sr
from transformers import pipeline
import cv2

def extract_audio(video_path):
    """
    Extracts audio from a video file using FFMPEG.
    """
    audio_path = 'audio.wav'
    ffmpeg.input(video_path).output(audio_path).run(overwrite_output=True)
    return audio_path

def transcribe_audio(audio_path):
    """
    Transcribes audio to text using Google Speech Recognition.
    """
    recognizer = sr.Recognizer()
    with sr.AudioFile(audio_path) as source:
        audio = recognizer.record(source)
        transcript = recognizer.recognize_google(audio)
    return transcript

def summarize_transcript(transcript):
    """
    Summarizes the transcribed text using a pre-trained summarization model.
    """
    summarizer = pipeline('summarization')
    summary = summarizer(transcript, max_length=130, min_length=30, do_sample=False)
    return summary[0]['summary_text']

def add_text_overlay(video_path, summary):
    """
    Overlays the summary text onto the video frames using OpenCV.
    """
    cap = cv2.VideoCapture(video_path)
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter('output.avi', fourcc, 20.0, (640, 480))

    while cap.isOpened():
        ret, frame = cap.read()
        if ret:
            cv2.putText(frame, summary, (10, 500), cv2.FONT_HERSHEY_SIMPLEX, 1, (255, 255, 255), 2, cv2.LINE_AA)
            out.write(frame)
        else:
            break

    cap.release()
    out.release()

def process_video(video_path):
    """
    Processes the video by extracting audio, transcribing it, summarizing the transcript,
    and overlaying the summary onto the video.
    """
    audio_path = extract_audio(video_path)
    transcript = transcribe_audio(audio_path)
    summary = summarize_transcript(transcript)
    add_text_overlay(video_path, summary)
    print(f"Video processed successfully. Summary: {summary}")

if __name__ == "__main__":
    # Replace 'input_video.mp4' with the path to your video file
    process_video('input_video.mp4')

