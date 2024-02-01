jtd.onReady(function(){

    var codeBlocks = document.querySelectorAll('div.highlighter-rouge, div.listingblock > div.content, figure.highlight');

    var svgCopied = '<svg viewBox="0 0 24 24"><path fill="#00a351" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.88-11.71L10 14.17l-1.88-1.88a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l2.59 2.59c.39.39 1.02.39 1.41 0L17.3 9.7c.39-.39.39-1.02 0-1.41-.39-.39-1.03-.39-1.42 0z"></path></svg>';
    var svgCopy = '<svg viewBox="0 0 24 24"><path fill="#7253ed" d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"></path></svg>';
  
    codeBlocks.forEach(codeBlock => {
      var copyButton = document.createElement('button');
      var timeout = null;
      copyButton.type = 'button';
      copyButton.className = 'code-copy';
      copyButton.ariaLabel = 'Copy code to clipboard';
      copyButton.innerHTML = svgCopy;
      codeBlock.append(copyButton);
  
      copyButton.addEventListener('click', function () {
        if(timeout === null) {
          var code = (codeBlock.querySelector('pre:not(.lineno, .highlight)') || codeBlock.querySelector('code')).innerText;
          window.navigator.clipboard.writeText(code);
  
          copyButton.innerHTML = svgCopied;
  
          var timeoutSetting = 4000;
  
          timeout = setTimeout(function () {
            copyButton.innerHTML = svgCopy;
            timeout = null;
          }, timeoutSetting);
        }
      });
    });
  
  });