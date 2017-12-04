import test from 'ava';
import unpkgJson from '.';

test('can fetch package.json', async t => {
  const pkgJson = await unpkgJson('dpndon');
  t.is(pkgJson.name, 'dpndon');
})

test('can fetch package.json with version', async t => {
  const pkgJson = await unpkgJson('dpndon@0.0.6');
  t.is(pkgJson.name, 'dpndon');
  t.is(pkgJson.version, '0.0.6');
})

test('reject if package not found', async t => {
  const notExist = 'donabkasldkfjkba';
  await t.throws(unpkgJson(notExist), `Package \`${notExist}\` doesn't exist`)
})