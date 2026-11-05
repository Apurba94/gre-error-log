# GRE Error Log

Every GRE question you got wrong in any app of the suite, to sort, retry and annotate.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `GRE Error Log.exe` from the [latest release](https://github.com/Apurba94/gre-error-log/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-error-log/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Mistakes are the best study material you have. Every GRE question you miss in any app of this suite is logged here automatically, with the question itself, so you can retry it, write a note on why you missed it, and see which topics cause the most trouble.

Sections: Mistakes, By topic, Progress, About.

## How to use it

1. Practise in any GRE app of the suite. Missed questions appear in **Mistakes**.
2. Write a short note for each: careless, did not know the word, ran out of time.
3. Press **Retry** to redo them as a practice set.
4. See **By topic** for the areas to study next.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
