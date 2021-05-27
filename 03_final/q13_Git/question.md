## Git Question A:

You have committed and pushed a bad change to your git repo.  How can you fix it (give exact command)?
Consider how to do this without destroying history, since others might have pulled your bad change and based their changes on yours?  What would this command do?

### Answer:
git revert <sha1-commit-hash> will allow you to select a specific commit to revert your local files to. 
git checkout -b <new-branch-name> <sha1-commit-hash> will create a new branch at a specific commit

## Git Question B:

How do you delete a local branch after completing work on it.  How would you delete a remote branch?

### Answer:
git branch -d localBranchName  This will delete only the local history of a branch
git push origin --delete remoteBranchName  This will push a deletion of a branch to the repo