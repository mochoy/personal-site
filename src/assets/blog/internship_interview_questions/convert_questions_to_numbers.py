'''
Python script to update all questions in internship_interview_questions.md. 
When I first wrote this, I listed questions as bullet points but instead, I want
it to be a list of numbers. This script updates any bullet points to numbers. It
can also update a list of numbers to have the appropriate ordering. 
'''

srcFile = "internship_interview_questions.md"
outputFile = srcFile
# outputFile = "test.md"

def main():
  # Content in this string will be written to the output file after the source
  # file has been processed
  outputFileContent = ""

  with open(srcFile) as file:
    # Convert all lines into an iterable list
    lines = file.readlines()
    lines = [line.rstrip() for line in lines]

    sectionTitle = ""
    questionCount = 0;

    for line in lines:
      # Identify all section/subsection titles 
      if line[0:1] is "#":
        sectionTitle = line

      # Identify all questions based on the first character(s), either a number
      # or '- '
      elif (line[0:2] == "- ") or (line[0:1].isdigit()):
        # Make sure the section isn't Appendix or Disclaimers and Notes by
        # checking the sectionTitle. Appendix and Disclamer/Notes items shouln't
        # be counted as questions
        if ("Appendix" not in sectionTitle 
          and "Disclaimers and Notes" not in sectionTitle):
          questionCount += 1; 
          
          # Replace 
          # line = line.replace("- ", "{}. ".format(questionCount))
          
          # Index of first space, this indicates where the line marker ('-' or 
          # "num.") and the question begins
          spaceIndex = line.find(" ")

          # Construct a new line with appropriate number  
          line = "{questionCount}.{question}".format(
            questionCount = questionCount,
            question = line[spaceIndex:]
          )

      outputFileContent = "".join((outputFileContent, "{}\n".format(line)))

  # Clear original file content
  f = open(outputFile, "w")
  f.write("")
  f.close()

  # Write updated file content to output file
  f = open(outputFile, "a")
  f.write(outputFileContent)
  f.close()

if __name__ == "__main__":
  main()
